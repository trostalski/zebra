import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { devtoolsExchange } from "@urql/devtools";
import { Cache, cacheExchange } from "@urql/exchange-graphcache";
import React from "react";
import { createClient, dedupExchange, fetchExchange, Provider } from "urql";
import { NumPatientTasks, useNumPatientTasksQuery } from "../generated/graphql";
import theme from "../theme";

// invalidates Cache to update the patientAnforderungen displayed in UntersuchungenBox Component
function invalidateAnforderungen(cache: Cache) {
  const allFields = cache.inspectFields("Query");
  const fieldInfos = allFields.filter(
    (info) => info.fieldName === "patientAnforderungen"
  );
  fieldInfos.forEach((fi) => {
    cache.invalidate("Query", "patientAnforderungen", fi.arguments || {});
  });
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  maskTypename: true,
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          createPatientTask: (_result, _args, cache, _info) => {
            invalidateAnforderungen(cache);
            /*
            cache.updateQuery({ query: "numPatientTasks" }, (data) => {
              console.log("data: ", data);
              return data
            });
            */
          },
          deletePatientTask: (_result, args, cache, _info) => {
            invalidateAnforderungen(cache);
          },
        },
      },
    }),
    fetchExchange,
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;

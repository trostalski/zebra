import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import React from "react";
import {
  Provider,
  createClient,
  dedupExchange,
  fetchExchange,
  gql,
} from "urql";
import theme from "../theme";
import {} from "@urql/exchange-graphcache";
import { cacheExchange, Cache } from "@urql/exchange-graphcache";
import {
  CreatePatientTaskDocument,
  DeletePatientTaskMutationVariables,
} from "../generated/graphql";

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
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          createPatientTask: (_result, _args, cache, _info) => {
            invalidateAnforderungen(cache);
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

import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

// Create Apollo Client for WordPress GraphQL
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

// Helper function for executing queries
export async function executeQuery<T = any>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const result = await apolloClient.query({
      query: gql(query),
      variables,
      fetchPolicy: 'cache-first',
    });
    
    return result.data;
  } catch (error) {
    console.warn('WordPress GraphQL query failed, using fallback data:', error);
    // Return null to trigger fallback data usage
    return null as T;
  }
}

// Helper function for mutations
export async function executeMutation<T = any>(
  mutation: string,
  variables?: Record<string, any>
): Promise<T> {
  try {
    const result = await apolloClient.mutate({
      mutation: gql(mutation),
      variables,
    });
    
    return result.data;
  } catch (error) {
    console.error('WordPress GraphQL mutation error:', error);
    throw error;
  }
}
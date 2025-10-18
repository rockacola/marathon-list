import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: {
          value:
            'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        },
        body: {
          value:
            'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
        },
      },
    },
    semanticTokens: {
      colors: {
        fg: {
          value: "{colors.gray.900}",
        },
      },
    },
  },
});

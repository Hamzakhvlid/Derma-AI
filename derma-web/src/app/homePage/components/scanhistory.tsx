import "@radix-ui/themes/styles.css";
import { Theme, Box, Card, Flex, Avatar, Text } from "@radix-ui/themes";

export default function ScanHistory() {
  return (
    <Theme>
        <img src="robot1.png" className="h-3 w-3" alt="" />
      <Box width="min-content">
        <Card className="px-4 py-3">
          <Flex gap="3" align="center">
            <Text as="div" size="2" weight="bold" color="yellow">
              Disease:
            </Text>
            <Text as="div" size="2" color="gold"  >
              hiashia...
            </Text>
          </Flex>
          <Flex gap="3" align="center">
            <Text as="div" size="2" weight="bold" color="red">
              Severity:
            </Text>
            <Text as="div" size="2" color="ruby">
              70%
            </Text>
          </Flex>
          <Flex gap="3" align="center">
            <Text as="div" size="2" weight="bold" color="blue">
              Confidence:
            </Text>
            <Text as="div" size="2" color="sky">
              94%
            </Text>
          </Flex>
        </Card>
      </Box>
    </Theme>
  );
}

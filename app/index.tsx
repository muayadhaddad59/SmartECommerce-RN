import AppText from "@/components/texts/AppText";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,

      }}
    >
        <AppText variant={"bold"}>Hello World, Muayad </AppText>
    </SafeAreaView>
  );
}

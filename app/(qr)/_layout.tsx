import { Stack } from "expo-router"

const QrLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="qrCode" options={{ headerShown: false }} />
        </Stack>
    )
}
export default QrLayout;
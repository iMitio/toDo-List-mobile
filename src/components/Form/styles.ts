import  {StyleSheet} from "react-native"
export const styled = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    marginTop: 150,

    marginLeft: 24,
    marginRight: 24,
  },
  input: {
    alignItems: "center",
    padding: 16,
    gap: 8,


    width: 271,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 8,
    color: "#fff",

    fontSize: 16,
    fontWeight: "400"

  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    padding: 18,

    backgroundColor: "#1E6F9F",
    borderRadius: 6,
  }
})
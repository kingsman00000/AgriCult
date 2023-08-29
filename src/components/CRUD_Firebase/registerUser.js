import { ref, set } from "firebase/database";
import { database } from "./Firebase";
export function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

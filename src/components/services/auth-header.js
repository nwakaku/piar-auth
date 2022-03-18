export default function authHeader() {
  const user = localStorage.getItem("user");
  console.log(user);
  if (user) {
    return { "user-jwt": user };
  } else {
    return {};
  }
}

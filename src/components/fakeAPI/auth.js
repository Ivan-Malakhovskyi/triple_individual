export const fakeLoginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // simulate a fake "backend" check
      if (email === "test@test.com" && password === "123456") {
        resolve({
          success: true,
          token: "fake-jwt-token-" + Date.now(),
          user: { id: 1, email, name: "Test User" },
        });
      } else {
        reject({ success: false, message: "Invalid email or password" });
      }
    }, 1200); // fake network delay
  });
};

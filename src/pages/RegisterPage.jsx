export default function RegisterPage() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

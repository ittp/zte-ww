import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>ZTE Settings </h3>
      <fieldset>
        <input
          name="current-ip"
          readonly="readonly"
          class="input"
          type="text"
          value="m.home"
        />
      </fieldset>

      <fieldset id="auth">
        <label for="ip">IP</label>
        <input name="ip" class="input" type="text" placeholder="192.168.0.1" />
        <label for="password">IP</label>
        <input
          name="password"
          class="input"
          type="password"
          placeholder="admin"
          value="admin"
        />
      </fieldset>

      <fieldset id="password">
        <label for="password">Password</label>
        <input
          name="password"
          class="input"
          type="password"
          placeholder="admin"
          value="admin"
        />
      </fieldset>

      <button class="button" type="submit">
        Save
      </button>
    </div>
  );
}

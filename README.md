# React Fundamentals Exercises

This project contains a set of 5 exercises demonstrating fundamental React concepts. Built with Vite and React.

## Exercises Included

1. **Props**: (`src/components/Exercise1_Props.jsx`)
   - Demonstrates passing data from a parent component to a child using props.
   - Includes a custom `Button` component that receives `label` and `color` props to set inline styles.

2. **Managing State**: (`src/components/Exercise2_State.jsx`)
   - Demonstrates component state using the `useState` hook.
   - Includes a `Toggle` button ("ON" / "OFF") and a text input that mirrors its value immediately to a paragraph below it.

3. **Event Handling**: (`src/components/Exercise3_Events.jsx`)
   - Demonstrates React event handling (`onMouseEnter`, `onMouseLeave`).
   - Includes a `div` element that smoothly transitions its background color when hovered over.

4. **Conditional Rendering**: (`src/components/Exercise4_Conditionals.jsx`)
   - Demonstrates rendering specific UI based on arbitrary logic.
   - Includes a `TrafficLight` component that uses a `switch` statement to display messages like "Stop", "Slow Down", and "Go" according to its color prop.

5. **Lists & Keys**: (`src/components/Exercise5_Lists.jsx`)
   - Demonstrates iterating over an array of data and rendering a list.
   - Shows the importance of unique keys (`id`) vs index keys (highlighting the danger of adding to the start of a list using index keys).

## Running the Application

To run the app locally in development mode:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite dev server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server address (usually `http://localhost:5174`).

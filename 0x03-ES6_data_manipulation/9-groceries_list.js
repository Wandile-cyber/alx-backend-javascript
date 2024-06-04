/**
 * Retrieves a map of grocery names and their quantity.
 * @author Wandile Ralph Dlamini <https://github.com/Wandile-cyber>
 * @returns {Map<string, Number>}
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}

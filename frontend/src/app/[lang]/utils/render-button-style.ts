export function renderButtonStyle(type: string) {
  switch (type) {
    case "primary":
      return "rounded-full px-6 py-3 text-md bg-primary text-white";
    case "secondary":
      return "rounded-full px-6 py-3 text-md border bg-white text-dark-purple";
    default:
      return "rounded-full px-6 py-3 text-md bg-violet-400 text-gray-900";
  }
}

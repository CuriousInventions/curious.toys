export default ({ emoji, title, description, bgColor = "#F3E8FF" }) => (
  <div
    class="rounded-2xl p-8 flex flex-col gap-3"
    style={{ backgroundColor: bgColor }}
  >
    <div class="text-4xl">{emoji}</div>
    <h3 class="font-bubblegum text-xl text-purple-secondary">{title}</h3>
    <p class="font-comic text-gray-600 leading-relaxed">{description}</p>
  </div>
);

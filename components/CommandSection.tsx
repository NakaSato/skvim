import { VimCommand } from "@/lib/vim-data";

interface CommandItemProps {
  command: VimCommand;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export function CommandItem({
  command,
  gradientFrom,
  gradientTo,
  bgColor,
  borderColor,
  textColor,
}: CommandItemProps) {
  return (
    <div
      className={`flex items-center justify-between py-2 px-3 ${bgColor} rounded-lg border ${borderColor} hover:${bgColor.replace(
        "/20",
        "/30"
      )} transition-colors`}
    >
      <code
        className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent font-bold text-sm`}
      >
        {command.key}
      </code>
      <span className={`${textColor} text-sm ml-3 flex-1`}>{command.desc}</span>
    </div>
  );
}

interface CommandSectionProps {
  title: string;
  icon?: string;
  commands: VimCommand[];
  category: string;
  gradientFrom: string;
  gradientTo: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export function CommandSection({
  title,
  icon,
  commands,
  category,
  gradientFrom,
  gradientTo,
  bgColor,
  borderColor,
  textColor,
}: CommandSectionProps) {
  const filteredCommands = commands.filter((cmd) => cmd.category === category);

  if (filteredCommands.length === 0) return null;

  return (
    <div>
      <h3
        className={`text-lg font-semibold ${textColor} mb-4 flex items-center gap-2`}
      >
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredCommands.map((command, idx) => (
          <CommandItem
            key={idx}
            command={command}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
            bgColor={bgColor}
            borderColor={borderColor}
            textColor={textColor}
          />
        ))}
      </div>
    </div>
  );
}

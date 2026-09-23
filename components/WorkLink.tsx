import { WORKANA_URL } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function WorkLink({ children, className, id }: Props) {
  return (
    <a
      id={id}
      href={WORKANA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

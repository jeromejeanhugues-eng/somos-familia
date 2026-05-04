interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false, light = false }: Props) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <span
        className={`gold-line ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      <h2
        className={`font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? 'text-dark' : 'text-light'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-dark/60' : 'text-light/60'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

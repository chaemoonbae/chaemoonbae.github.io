import ContactItem from "./ContactItem";

const Footer = ({
  contact,
  name,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 text-xs text-white bg-GRAY h-28 dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      {/* <div className="flex gap-1">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact}>
            {contact.name}
          </ContactItem>
        ))}
      </div> */}
      <div className="flex flex-col items-center">
        <span className="text-center whitespace-pre-wrap">{`Copyright 2024. ${name} All rights reserved.`}</span>
        <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-portfolio">
          Powered by very-simple-portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;

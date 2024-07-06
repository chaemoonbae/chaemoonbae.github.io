const CertificateItem = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 flex-wrap">
          {skills.map((skill) => (
            <span
              key={skill}
              className=" bg-PRIMARY dark:bg-white py-[2px] px-2 rounded-md text-xs font-medium font-mono whitespace-nowrap text-xl text-white dark:text-BLACK"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;

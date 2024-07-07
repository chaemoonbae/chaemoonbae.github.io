const CertificateItem = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className=" bg-PRIMARY dark:bg-white py-[2px] px-2 rounded-md text-lg font-medium font-mono whitespace-nowrap text-xl text-white dark:text-BLACK"
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

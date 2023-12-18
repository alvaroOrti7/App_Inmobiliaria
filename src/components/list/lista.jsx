const list = [
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
];

const Lista = () => (
    <div id="titulos" className="bg-gray">
        <div className="p-14 mobile:p-8">
            <h1 className="font-impact text-5xl mobile:text-3xl">lorem ipsum</h1>
            <h3 className="font-impact text-lg text-border">lorem ipsum</h3>
            <ol className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
                {list.map((parrafo, key) => (
                    <li key={key} className="flex flex-row mb-4 hover:scale-105 transition-all cursor-default mobile:flex-col sm:flex-row">
                        <span className="mr-6 font-impact text-blueSky text-3xl">{"0" + (key + 1)}</span>
                        <p className="flex self-center text-lg font-semibold text-justify mobile:text-base lg:text-[lg] 2xl:text-[22px]">{parrafo}</p>
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

export default Lista;

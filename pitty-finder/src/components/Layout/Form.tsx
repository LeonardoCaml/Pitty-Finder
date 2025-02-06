import FormSelectMui from "../Atoms/Form";
import ButtonMui from "../Atoms/ButtonMui";

interface Props {
    firstLabel: string;
    secondLabel: string;
    thirdLabel: string;
}

export default function Form({ firstLabel, secondLabel, thirdLabel }: Props) {
    return (
        <div>
            <h1 className="font-bold text-3xl my-4">
                filtro
            </h1>
            <div className="w-full grid grid-cols-4 gap-4 items-center">
                <FormSelectMui formLabel={firstLabel} />
                <FormSelectMui formLabel={secondLabel} />
                <FormSelectMui formLabel={thirdLabel} />
                <ButtonMui
                    tittle="buscar"
                    onClick={() => console.log("teste")}
                />
            </div>
        </div>
    );
}

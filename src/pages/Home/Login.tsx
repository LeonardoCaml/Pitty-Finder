import { Modal } from "@mui/material";
import { Google } from "@mui/icons-material";

interface Props {
    open: boolean;
    handleClose: () => void;
}

export default function Login({ open, handleClose }: Props) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}>
                <div className="item-center-absolute flex flex-col justify-center items-center bg-white w-96 p-5 gap-2 rounded-xl">
                    <h1 className="text-3xl font-bold">login</h1>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold text-sm">email</label>
                        <input type="text" placeholder="email" className="w-72 p-2 border-2 border-black rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="senha" className="font-bold text-sm">senha</label>
                        <input type="text" placeholder="senha" className="w-72 p-2 border-2 border-black rounded-md" />
                        <a href="#" className="text-blue-500 font-bold text-sm self-end">esquecei minha senha</a>
                    </div>
                    <div className="w-72 h-px my-2 bg-black" />
                    <button className="w-72 flex gap-2 p-2 border-2 border-black rounded-md">
                        <Google />
                        <p>entrar com o google</p>
                    </button>
                    <div className="w-72 flex items-center gap-1">
                        <input type="checkbox" name="check" id="check" />
                        <label htmlFor="check" className="text-sm">lembrar de mim</label>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface Props {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: any;
    currentPage: number;
}

export default function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }: Props) {
    let page = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        page.push(i)
    }
    return (
        <div>
            <button onClick={() => {
                if (currentPage === 1) return;
                setCurrentPage(currentPage - 1)
            }}>
                <ArrowBackIos />
            </button>
            {page.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className="bg-gray-200 w-8 h-8 rounded-full m-1"
                    >
                        {page}
                    </button>
                )
            })}
            <button onClick={() => {
                if (currentPage === Math.ceil(totalPosts / postsPerPage)) return;
                setCurrentPage(currentPage + 1)
            }}>
                <ArrowForwardIos />
            </button>
        </div>
    )
}
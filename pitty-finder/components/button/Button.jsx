import './button.css'

export default function Button({ tittle, onClick }) {
    return(
        <div className='button-wrapper'>
            <button
            onClick={onClick}
            className='button-content'>
                <p>{tittle}</p>
            </button>
        </div>
    )
}
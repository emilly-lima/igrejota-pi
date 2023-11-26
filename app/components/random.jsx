import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'

export default function Random() {
    return (
        <div className="flex justify-center">
            <button className="bg-zinc-100">
                <FontAwesomeIcon icon={faDiceFive} width={28} height={28} />
            </button>
        </div>
    )
}
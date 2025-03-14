export default function Notice({notice}) {


    return (
        <>
             <blockquote className={`notice notice-container-${notice.status}`}>
             {notice.message}
             </blockquote>
        </>
    )
}
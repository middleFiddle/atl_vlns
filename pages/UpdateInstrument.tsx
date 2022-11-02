import React, { useEffect, useState } from "react"

const UpdateInstrument = () => {
    const [id, setId] = useState("")
    const [path, setPath] = useState("")
    const [submit, setSubmit] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        setSubmit((prev) => !prev)
        console.log(id, path)
    }
    useEffect(() => {
        async function fetchData() {
            await fetch("/api/updateImage", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json, text/plain, */*",
                },
                body: JSON.stringify({
                    id: id,
                    path: path,
                }),
            })
        }
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }, [submit])

    const handleId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setId(e.target.value)
    }
    const handlePath: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPath(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>instrument id</label>
            <input type="text" value={id} onChange={handleId} />
            <label>new image path</label>
            <input type="text" value={path} onChange={handlePath} />
            <input type="submit" value="Update Image Path" />
        </form>
    )
}

export default UpdateInstrument

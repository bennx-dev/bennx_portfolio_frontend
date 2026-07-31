import {useState} from "react";

export default function useContact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    function handleChange(event) {
        const {name, value} = event.target;

        setForm(previous => ({
            ...previous,
            [name]: value
        }));
    }

    async function sendContact(event) {
        event.preventDefault();

        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Versturen mislukt");
            }

            setSuccess(true);

            setForm({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        form,
        loading,
        success,
        error,
        handleChange,
        sendContact
    };
}
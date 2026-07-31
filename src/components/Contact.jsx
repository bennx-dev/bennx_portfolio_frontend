import useContact from "../hooks/useContact.jsx";

export default function Contact() {
    const {
        form,
        loading,
        success,
        error,
        handleChange,
        sendContact
    } = useContact();

    return (
        <section className="contact-section">
            <h4 className="contact-title">Contact</h4>

            <div className="contact-wrapper">

                <form className="contact-form" onSubmit={sendContact}>

                    <div className="form-group">
                        <label>Naam</label>
                        <input
                            type="text"
                            placeholder="Jouw naam"
                            required
                            maxLength="50"
                            autoComplete="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="jouw@email.com"
                            required
                            autoComplete="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Bericht</label>
                        <textarea
                            rows="4"
                            placeholder="Typ je bericht..."
                            required
                            maxLength="500"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Versturen..." : "Verstuur"}
                    </button>

                    {success && (
                        <p className="success-msg">✔ Bericht verzonden!</p>
                    )}

                    {error && (
                        <p className="error-msg">❌ {error}</p>
                    )}

                </form>

            </div>
        </section>
    );
}
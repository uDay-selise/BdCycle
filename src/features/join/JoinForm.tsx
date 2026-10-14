import { useState } from "react";
import { site, join } from "../../content/site";

type FormState = {
  name: string;
  email: string;
  ride: string;
  message: string;
};

const EMPTY: FormState = { name: "", email: "", ride: "", message: "" };

function buildMailto(values: FormState): string {
  const subject = values.ride
    ? `Joining a Bd Cycle ride: ${values.ride}`
    : "Joining a Bd Cycle ride";

  const lines = [
    `Hi Bd Cycle,`,
    ``,
    values.message.trim() || `I'd like to come along on a ride.`,
    ``,
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Ride: ${values.ride.trim() || "Not sure yet"}`,
  ];

  return `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function JoinForm({
  heading,
  defaultRide,
}: {
  heading?: string;
  defaultRide?: string;
}) {
  const [values, setValues] = useState<FormState>({
    ...EMPTY,
    ride: defaultRide ?? "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (field === "name" || field === "email") {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: { name?: string; email?: string } = {};
    if (!values.name.trim()) nextErrors.name = join.errors.name;
    if (!values.email.trim()) nextErrors.email = join.errors.email;

    if (nextErrors.name || nextErrors.email) {
      setErrors(nextErrors);
      setSent(false);
      return;
    }

    setErrors({});
    window.location.href = buildMailto(values);
    setSent(true);
  }

  return (
    <form className="panel join__form" onSubmit={handleSubmit} noValidate>
      {heading ? <h2 className="join__form-title">{heading}</h2> : null}

      <div className="field">
        <label className="field__label" htmlFor="join-name">
          {join.fields.name}
        </label>
        <input
          id="join-name"
          className="field__input"
          type="text"
          name="name"
          value={values.name}
          onChange={update("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "join-name-error" : undefined}
        />
        {errors.name ? (
          <p className="field__error" id="join-name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label className="field__label" htmlFor="join-email">
          {join.fields.email}
        </label>
        <input
          id="join-email"
          className="field__input"
          type="email"
          name="email"
          value={values.email}
          onChange={update("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "join-email-error" : undefined}
        />
        {errors.email ? (
          <p className="field__error" id="join-email-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label className="field__label" htmlFor="join-ride">
          {join.fields.ride}
        </label>
        <input
          id="join-ride"
          className="field__input"
          type="text"
          name="ride"
          placeholder={join.ridePlaceholder}
          value={values.ride}
          onChange={update("ride")}
        />
      </div>

      <div className="field">
        <label className="field__label" htmlFor="join-message">
          {join.fields.message}
        </label>
        <textarea
          id="join-message"
          className="field__input field__input--area"
          name="message"
          rows={5}
          placeholder={join.messagePlaceholder}
          value={values.message}
          onChange={update("message")}
        />
      </div>

      <button className="btn btn--primary join__submit" type="submit">
        {join.submit}
      </button>

      {sent ? (
        <p className="join__sent" role="status">
          Your email app should be opening with the message ready. If not, email
          us at {site.email}.
        </p>
      ) : (
        <p className="field__hint">{join.hint}</p>
      )}
    </form>
  );
}
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormInput from "../ui/FormInput";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import SendIcon from "../ui/SendIcon";
import Button from "../ui/Button";
import Proptypes from "prop-types";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Heading from "../ui/Heading";

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 2fr;
  gap: 1rem;

  & > div {
    &:nth-child(3) {
      grid-column: 1/3;
    }
    &:nth-child(4) {
      grid-row: 1/3;
      grid-column: 3/-1;
    }

    input,
    textarea {
      color: inherit;
      width: 100%;
      height: 100%;
    }
  }

  ${Button} {
    grid-column: 3/4;
    justify-self: end;
  }
`;

const FormContainer = styled.div`
  @media (max-width: 700px) {
    ${Form} {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;

      ${Button} {
        align-self: end;
      }
    }
  }
`;

function ContactForm({ handleClose }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { isSubmitting, errors } = formState;

  async function onSubmit(data) {
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      );
      reset();
      toast.success("Email Sent Successfully!");
      handleClose();
    } catch (e) {
      toast.error("Something went wrong!");
    }
  }

  return (
    <FormContainer>
      <Heading as="h3">Get in Touch!</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput label="Name" error={errors?.name?.message}>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            {...register("name", { required: "This field is required" })}
          />
        </FormInput>
        <FormInput label="Email" error={errors?.email?.message}>
          <Input
            type="text"
            name=""
            id="email"
            placeholder="Your Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
          />
        </FormInput>
        <FormInput label="Subject" error={errors?.subject?.message}>
          <Input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject..."
            {...register("subject", { required: "This field is required" })}
          />
        </FormInput>
        <FormInput label="Message" error={errors?.message?.message}>
          <Textarea
            name="message"
            id="message"
            placeholder="Your Message..."
            {...register("message", { required: "This field is required" })}
          />
        </FormInput>
        <Button
          type="submit"
          aria-label="Send"
          title="Send"
          variant="icon"
          disabled={isSubmitting}
        >
          <SendIcon />
        </Button>
      </Form>
    </FormContainer>
  );
}

ContactForm.propTypes = {
  handleClose: Proptypes.func,
};

export default ContactForm;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { HeroComponent } from '../components/Hero';
import { useForm, ValidationError } from "@formspree/react";
import ObrigadoModal from './obrigado';
import { Mail, Phone } from 'lucide-react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Duvidas from '../components/duvidas';
import { Footer } from '../components/footer';

const Form = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  padding: 18.8rem 10.9rem;
  font-family: sans-serif;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: auto;
  gap: 12px;
  padding: 24px;
  border-radius: 15px 0px;
  background: #FFF;
  color: ${({ theme }) => theme.COLORS.GREEN};
  box-shadow: 8px 8px 22.7px 0px rgba(0, 0, 0, 0.25);
  

  h3 {
    font-size: clamp(2.8rem, 2vw + 1.6rem, 3.6rem);
    font-weight: 600;
    line-height: 42px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;

  > input {
    flex: 1;
  }
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-block: 8px;
 
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-block: 8px;
`;

const Check = styled.div`
    width: auto;
`;

const LabelText = styled.span`
  font-size: 14px;
  color: #555;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: ease-in-out 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GREEN};
    border: 1px solid #354A21;
  }
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
 
`;

const ContactBox = styled.div`
  display: flex;
  padding: 17px 36px;
  width: 601px;
  height: 122px;
  flex-shrink: 0;
  background: #FFF;
  border-radius: 15px 0px;
  box-shadow: 8px 8px 22.7px 0px rgba(0, 0, 0, 0.25);
  line-height: 35px;

  strong {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GREEN};
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 333px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.GREEN};
    margin-top: 8px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;


const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    gap: 8px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Contato = () => {
    const [state, handleSubmit] = useForm("xwpojdwy");
    const [modalAberta, setModalAberta] = useState(false);
    const [checked, setChecked] = useState(false);

    const [formValues, setFormValues] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        empresa: "",
        colaboradores: "",
        descoberta: "",

    });

    useEffect(() => {
        if (state.succeeded) {
            setModalAberta(true);
            setFormValues({
                nome: "",
                sobrenome: "",
                email: "",
                telefone: "",
                empresa: "",
                colaboradores: "",
                descoberta: "",

            });
            setChecked(false);
        }
    }, [state.succeeded]);

    // Atualiza estado local ao digitar
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Passa os dados do estado manualmente ao Formspree no submit
    const onSubmit = (e) => {
        e.preventDefault();
        // Cria um objeto FormData com os dados do estado
        const formData = new FormData();
        Object.entries(formValues).forEach(([key, value]) => {
            formData.append(key, value);
        });
        handleSubmit(e);
    };

    return (
        <>
            <Helmet>
                <title>Contato | Raafer</title>
                <meta name="description" content="Saiba mais sobre a história da Raafer e o nosso compromisso com produtos frescos." />
                <meta property="og:title" content="Quem Somos | Raafer" />
                <meta property="og:description" content="Conheça nossa trajetória e os pilares que nos guiam." />
            </Helmet>
            <HeroComponent
                title="Do campo para a sua mesa, com qualidade e frescor incomparáveis."
                subtitle="Uma vida mais saudável começa com escolhas inteligentes. Aposte em produtos frescos, ricos em nutrientes e sem conservantes para garantir bem-estar e vitalidade todos os dias."
                buttonText="Conheça nossos clientes"
            />
            <Form>
                <FormBox onSubmit={handleSubmit}>
                    <h3>Deixe sua mensagem que entraremos em contato</h3>
                    <Row>
                        <Input
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            required
                            value={formValues.nome}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="sobrenome"
                            placeholder="Sobrenome"
                            required
                            value={formValues.sobrenome}
                            onChange={handleChange}
                        />
                    </Row>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <Input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        value={formValues.telefone}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="empresa"
                        placeholder="Empresa"
                        value={formValues.empresa}
                        onChange={handleChange}
                    />
                    <Select
                        name="colaboradores"
                        required
                        value={formValues.colaboradores}
                        onChange={handleChange}
                    >
                        <option value="" hidden>Número de colaboradores?</option>
                        <option value="1-20">1-20</option>
                        <option value="20-50">20-50</option>
                        <option value="50-200">50-200</option>
                        <option value="200-500">200-500</option>
                        <option value="500+">500+</option>
                    </Select>
                    <Select
                        name="descoberta"
                        required
                        value={formValues.descoberta}
                        onChange={handleChange}
                    >
                        <option value="" hidden>Como você conheceu a Raafer?</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="indicação">Indicação</option>
                        <option value="google">Google</option>
                        <option value="evento">Evento</option>
                    </Select>
                    <Check checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}>
                        <FormGroup>
                            <FormControlLabel required control={<Checkbox />}
                                label={
                                    <LabelText>
                                        Confirmo a exatidão das informações pessoais, ciente de seu envio à Taxcel e da minha responsabilidade sobre elas.
                                    </LabelText>
                                } />
                        </FormGroup>
                    </Check>
                    <Button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Enviando..." : "Enviar formulário"}
                    </Button>
                    <ObrigadoModal
                        isOpen={modalAberta}
                        onClose={() => setModalAberta(false)}
                    />

                </FormBox>
                <SideBox>
                    <Title>Canais de atendimento</Title>
                    <ContactBox>
                        <Mail />
                        <ContactContent>
                            <strong>E-mail</strong>
                            <p>Envie um e-mail e fale diretamente com nossa equipe.</p>
                        </ContactContent>
                    </ContactBox>
                    <ContactBox>
                        <Phone />
                        <ContactContent>
                            <strong>WhatsApp</strong>
                            <p>Fale direto no seu WhatsApp com nossos atendentes.</p>
                        </ContactContent>
                    </ContactBox>
                </SideBox>
            </Form>
            <Duvidas />
            <Footer />
        </>
    );
};

export default Contato;

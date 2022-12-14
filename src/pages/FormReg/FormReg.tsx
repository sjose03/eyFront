import React from "react";
import { Accordion, TextInput, Grid, Textarea, Select } from "@mantine/core";
import { Container, Content, Button } from "./FormReg.styled";
import { Header } from "../../components/Header";
import { AiOutlinePlus } from "react-icons/ai";
const FormReg: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Accordion
          variant="default"
          defaultValue="infos_basicas"
          chevron={<AiOutlinePlus size={16} />}
          styles={{
            chevron: {
              "&[data-rotate]": {
                transform: "rotate(45deg)",
              },
            },
          }}
        >
          <Accordion.Item
            value="infos_basicas"
            style={{ minWidth: 720, margin: "auto" }}
          >
            <Accordion.Control>Informações Básicas</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                <Grid.Col span={4}>
                  <TextInput label="Nome" variant="filled" />
                  <TextInput label="Email" variant="filled" />
                  <TextInput label="Cargo Desejado" variant="filled" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <TextInput label="Idade" variant="filled" />
                  <TextInput label="Cargo Atual" variant="filled" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <TextInput label="Empresa Atual" variant="filled" />
                  <TextInput label="Pretensão Salarial" variant="filled" />
                </Grid.Col>
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="exp_profi">
            <Accordion.Control>Experiencia Profissional</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                <Grid.Col span={4}>
                  <TextInput label="Empresa" variant="filled" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <TextInput label="Cargo" variant="filled" />
                </Grid.Col>
                <Grid.Col span={4}>
                  <Textarea label="Atividades" variant="filled" />
                </Grid.Col>
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="form_escolar">
            <Accordion.Control>Formação Escolar</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput label="Instituição" variant="filled" />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    clearable
                    label="Escolaridade"
                    placeholder="Escolha um"
                    data={[
                      {
                        value: "Superior Completo",
                        label: "Superior Completo",
                      },
                      {
                        value: "Superior Incompleto",
                        label: "Superior Incompleto",
                      },
                      { value: "Médio", label: "Médio" },
                      { value: "Fundamental", label: "Fundamental" },
                    ]}
                  />
                </Grid.Col>
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="idioma">
            <Accordion.Control>Idioma</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput label="Lingua" variant="filled" />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    clearable
                    label="Nivel"
                    placeholder="Escolha um"
                    data={[
                      {
                        value: "Fluente",
                        label: "Fluente",
                      },
                      {
                        value: "Intermediário",
                        label: "Intermediário",
                      },
                      {
                        value: "Iniciante",
                        label: "Iniciante",
                      },
                    ]}
                  />
                </Grid.Col>
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="desc_brev">
            <Accordion.Control>
              Descreva brevemente sobre você
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                <Grid.Col span={12}>
                  <Textarea
                    placeholder="Fale sobre você"
                    variant="filled"
                    size="xl"
                  />
                </Grid.Col>
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Button to="/uploadPicture">Próximo</Button>
      </Content>
    </Container>
  );
};

export default FormReg;

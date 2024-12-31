/// <reference types = "cypress"/>

import contrato from "../contratos/produtos.contrato";

  describe('Teste de API - produtos', () => {
  let token
    beforeEach(() => {
      cy.token('fulano@qa.com', 'teste').then(tkn=>{
        token = tkn
      })
    });

it('Deve validar contrato de produtos com sucesso', () => {
  cy.request('produtos').then(response=>{
    return contrato.validateAsync(response.body)
  })
});

    it('Listar produtos - GET', () => {
      cy.request({
        method: "GET",
        url: "produtos"
      }).should((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property("produtos")
      })
    });

  it('Cadastrar produto com sucesso', () => {
    // to do: criar token dinamico
    let produto = "Produto " + Math.floor(Math.random()* 1000)
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzM1NjcxMzYyLCJleHAiOjE3MzU2NzE5NjJ9.-sjmxTwI3FlJLQS-xFFkOl5QS3ykzHBJgXAaG7ycyk0"
    cy.cadastrarProduto(token, produto, 3500, "TV", 100).should((response)=>{  
    expect(response.status).equal(201)
    expect(response.body.message).equal("Cadastro realizado com sucesso")
    })
  })
it('Deve validar mensagem de produto ja cadastrado', () => {
  let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzM1NjcxMzYyLCJleHAiOjE3MzU2NzE5NjJ9.-sjmxTwI3FlJLQS-xFFkOl5QS3ykzHBJgXAaG7ycyk0"
cy.cadastrarProduto(token, "Samsung TV 55'", 3500, "TV", 100).should((response)=>{
      expect(response.body.message).equal("Já existe produto com esse nome")
      expect(response.status).equal(400)
    })
});

it('Deve editar produto com sucesso', () => {
  let produto = "Produto " + Math.floor(Math.random()* 1000)
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzM1NjcxMzYyLCJleHAiOjE3MzU2NzE5NjJ9.-sjmxTwI3FlJLQS-xFFkOl5QS3ykzHBJgXAaG7ycyk0"
    cy.cadastrarProduto(token, produto, 10, "Produto editado", 100)
    .then(response=>{
      let id = response.body._id
      cy.request({
        method: "PUT",
        url: `produtos/${id}`,
        headers: {authorization: token},
        body:{
          "nome": produto,
          "preco": 200,
          "descricao": "Mouse",
          "quantidade": 150
        }
      }).then(response=>{
        expect (response.body.message).equal('Registro alterado com sucesso')
        expect(response.status).equal(200)
      })
    })
 
});
it('Deve deletar produto com sucesso', () => {
    let token =  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzM1NjcxMjIzLCJleHAiOjE3MzU2NzE4MjN9.xgjKkgtal8bh9RDJ68_eRLgbb4eux2gyuU56FCR4TeY"
    cy.cadastrarProduto(token, 'produtoDeletado', 10, "Delete", 100)
    .then(response=>{
      let id = response.body._id
      cy.request({
        method: "DELETE",
        url: `produtos/${id}`,
        headers: {authorization: token},
      }).then(response=>{
        expect (response.body.message).equal('Registro excluído com sucesso')
        expect(response.status).equal(200)
      })
    })
 
});
});
package com.ergito.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ergito.entities.Client;
import com.ergito.repositories.ClientRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders="*")
public class ClientController {

	@Autowired
	private ClientRepository clientRepository;
	
	@GetMapping("/clientes")
	public List<Client> getClients() {
		return this.clientRepository.findAll();
	}
	
	@GetMapping("/cliente/{id}")
	public Client getClient(@PathVariable Long id) {
		return this.clientRepository.findById(id).orElse(null);
	}
	
	@DeleteMapping("/cliente/{id}")
	public boolean deleteClient(@PathVariable Long id) {
		this.clientRepository.deleteById(id);
		return true;
	}
	
	@PostMapping("/cliente")
	public Client createClient(@RequestBody Client client) {
		return this.clientRepository.save(client);
	}
	
	@PutMapping("/cliente/{id}")
	public Client updateClient(@RequestBody Client client, @PathVariable Long id) {
		return this.clientRepository.save(client);
	}
	
}

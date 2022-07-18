package com.urbanpiping.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.urbanpiping.springboot.model.User;

@Service
public class NotificationService {

	private JavaMailSender javaMailSender;

	@Autowired
	public NotificationService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}

	public void sendNotification(User user) throws MailException {
		SimpleMailMessage mailMessage = new SimpleMailMessage();

		mailMessage.setTo(user.getUserEmail());
		mailMessage.setSubject("Urban Piping - Account Password");

		String message = String.format("Hello %s,%n%nThis is a confirmation e-mail that your account was successfully "
				+ "created within our system.%nHere's your account password: %s%n%n" + "Best Regards,%nUrban Piping Company",
				user.getUserFirstName(), user.getUserPassword());
		mailMessage.setText(message);

		javaMailSender.send(mailMessage);
	}
}

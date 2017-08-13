---
title: A Page with an Example Form
form:
    name: contact-form
    fields:
        - name: honeypot
          type: honeypot
        - name: skillset
          type: checkboxes
          label: Skillset
          options:
              option1: I'm good at explaining things
              option2: I'm super organized
              option3: I have lots of friends
              option4: I have other cool skills

        - name: first_name
          label: First Name
          placeholder: Enter your first name
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: last_name
          label: Last Name
          placeholder: Enter your last name
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: email
          label: Email
          placeholder: Enter your email address
          type: email
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true



    buttons:
        - type: submit
          value: Submit
          classes: center btn waves-effect waves-light
          outerclasses: df
        - type: reset
          value: Reset
          classes: btn waves-effect waves-light
          outerclasses: df
    process:
        - email:
            from: "{{ config.plugins.email.from }}"
            to:
              - "{{ config.plugins.email.from }}"
              - "{{ form.value.email }}"
            subject: "[Feedback] {{ form.value.name|e }}"
            body: "{% include 'forms/data.html.twig' %}"
        - save:
            fileprefix: feedback-
            dateformat: Ymd-His-u
            extension: txt
            body: "{% include 'forms/data.txt.twig' %}"
        - message: Thank you for your feedback!
        - display: thankyou

---

  
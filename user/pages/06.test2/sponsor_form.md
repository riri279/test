---
title: Sponsor Form
form:
    name: sponsor-form
    classes: col s12
    fields:
        - name: honeypot
          type: honeypot

        - name: company
          label: company
          placeholder: Company Name
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: contact
          label: contact
          placeholder: Person of Contact
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: address
          label: address
          placeholder: Address
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: state
          label: state
          placeholder: State 
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: city
          label: city
          placeholder: City 
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: zipcode
          label: zipcode
          placeholder: Zip Code
          autofocus: on
          autocomplete: on
          type: text
          classes: validate
          outerclasses: input-field col s12
          validate:
            required: true

        - name: phone-number
          label: phone-number
          placeholder: Phone Number
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
        - name: logo
          label: logo
          type: file
          multiple: false
          avoid_overwriting: true
          destination: '@self'
          accept:
            - image/*

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

  
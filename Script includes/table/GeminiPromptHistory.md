# ServiceNow + Google Gemini Integration

An AI-powered integration between ServiceNow and Google Gemini.

## Overview

This project demonstrates how Google Gemini can be integrated with ServiceNow to generate AI-powered responses from a custom ServiceNow form.

## Features

- Google Gemini API integration
- Outbound REST Message
- Reusable Script Include
- UI Action for response generation
- Custom Prompt History table
- Success and failure status tracking
- Error handling
- End-to-end testing

## Architecture

ServiceNow Form
→ UI Action
→ Script Include
→ REST Message
→ Google Gemini API
→ Response
→ ServiceNow Record

## ServiceNow Components

### Custom Table

`u_gemini_prompt_history`

### Script Include

`GeminiIntegration`

### UI Action

`Generate Gemini Response`

### REST Message

`Google_Gemini`

## Fields

- Prompt
- Gemini Response
- Status
- Error

## Status Values

- Requested
- Success
- Failed

## Security

The Google Gemini API key is not stored in this repository.

API credentials should be stored securely in ServiceNow and should never be committed to GitHub.

## Testing

The integration was tested using prompts such as:

- What is ServiceNow?
- What is a Business Rule in ServiceNow?
- What is Salesforce?

The generated responses were successfully stored in the ServiceNow custom table.

## Technologies

- ServiceNow
- JavaScript
- REST API
- Google Gemini
- Script Include
- UI Action
- JSON

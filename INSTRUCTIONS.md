# Instructions

## Introduction

Recently the business requested some basic CRUD operations for products. The products were already being stored in a different service’s database and are accessible through an endpoint.

The individual who started the work has had to move to another team. You have been brought on to finish the project.
You will notice that the previous developer started the NextJS14 project with MUI6 and has produced the following:

- a form to create products (name and price)
- a docker image to run a test backend via prism

**NOTE**

*It is expected that this project will be up and running on your local computer before the pairing session starts as you will be the primary developer/engineer in that session. If you have any difficulty getting the application running on your local computer, please reach out ASAP.*

## Requirements

Instead of landing on the product form, the business has decided that anyone using this route should:

- see a list of products (instead of the product form)
- be able to select a product to edit (which is viewed in the product form)
- be able to create a new product from the product list page

They have further requested that when creating or editing an individual product, the product list should still be visible.

Having used the product form, the design team has assessed that the UX isn’t the best since most of the users operated their mouse with their right hand and wanted to move the “SAVE” button to the right of the form so that it created a better flow for the users.
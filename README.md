# Project Title (Sentinel names have to be in lowercase!)

> One Paragraph of project description goes here

## Usage

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites (Optional)

What things you need to install the software and how to install them

```
Give examples
```

### Installing and running locally

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests (Optional)

Explain how to run the automated tests for this system

```
Give an example
```

## Deployment (Optional)

Add additional notes about how to deploy this on a live system

## Documentation (Optional)

### Endpoints for the sentinel administration

You need to provide 2 different endpoints for the Sentinel Administration inside of the Neo Portal.

1. Documentation
   
   To make the documentation accessable from the portal you need to provide following endpoint: `${pkg.name}.documentation`. This endpoint has to return Markdown-data which will be rendered in the sentinel administration.

   Example, to provide the `README.md` as documentation:
   ```js
   const fs = require('fs')
   neo.task.process(`${pkg.name}.documentation`, async () => {
     return { response: { data: fs.readFileSync('README.md', 'utf8') } }
   })
   ```
2. Flow Example

    You can also provide a Flow Example Payload, which can be copied from users. Simply build your example in the Neo Flow Engine and export it. Then write following endpoint `${pkg.name}.example`. 

    Example (Replace the return value with your exported JSON from the NFE):
    ```js
    neo.task.process(`${pkg.name}.example`, async () => {
      return [
        {
          id: 'ee053fa.4a2d8c',
          type: 'nfe-action',
          z: '7797257b.e59eec',
          action: 'example',
          x: 160,
          y: 1600,
          wires: [
            [
              'ee99d14b.f186f'
            ]
          ]
        },
        ...
      ]
    )}
    ```

## Built With (Optional)

## Authors/Maintainers

/* version template_componentHeader_v.0.5
# Component (user guide)

# Header
	
## Description  
	
The Header component is responsible for rendering the header section of the application. 
It displays a logo and a navigation bar with links.

## Category   
	
[Visual]  

## Live demo 
	
[GithubPage](https://leonelvalencia.github.io/portafolio)

## Usage 
	
<Header links={[]} logo="" />

## Props 

| Attribute |  Type  | Default |                 Description                     |
| --------- | ------ | ------- | ----------------------------------------------- |
|   links	|  Array |	  []   | An array of objects containing link information |
|   logo	| string |	  ""   | The URL of the logo image to be displayed       |

## Exception

__Category: [Error, Warning or Message]__
[Description of the exception (if necessary)]

## License

MIT License

## Author 
	
RegulonDB Team: 
[Leonel Valencia Estudillo <valenciaestudillo@gmail.com>]
[Gabriel Alarcon carranza <galarcon@ccg.unam.mx>]


# Component (technical guide)

## Component Type 

[ Visual ]
// Visual: This component will take care of the structure and styles of our application.

## Dependencies
[Dependency name][ Dependency details ]
[ index.css CSS ] file for styling the Header component

## States
	
| Property | Value | Description |
| -------- | ----- | ----------- |
|          |       |             |

## Hooks
|  Name  | Description |  Syntax  | Additional Notes or References | 
| ------ | ----------- | -------- | ------------------------------ |
|        |             |          |                                |

*/

import './header.css'

export default function Header({links = [],logo = ""}){
    return (
        <div className="Header">
            <a href={links[0].link}>
                <img src={logo} alt={links[0].label} />
            </a>
            <div className='navbar'>
                {links.map((link) => (
                    <a href={link.link} key={link.label}>{link.label}</a>
                ))}
            </div>
        </div>
    )
}
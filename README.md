# mcc-compsci.github.io

![overview](https://i.imgur.com/NPA243D.png)

## Adding a new member to the member list:

![members](https://i.imgur.com/m2CABwj.png)

- It is very simple to add a member to the member list. All one must do is:
  - Fork this repository
  - Create a new markdown _(`*.md`)_ file in the `/members` directory that follows the naming covention `firstName_lastName.md`
  - Edit the created markdown file so it contains the information shown below
  - Create a pull request to merge your changes back onto the live site
  
  After your pull request is accepted, your information will appear on the site within minutes.

```yml
---
name: Your first and last name.
short_bio: A short bio about yourself
image_url: An image url for your membership picture
role: A number ranging from 0 to 8 (Optional) **
website: Your website URL (Optional)
github: Your GitHub username (Optional)
discord: Your Discord username and number (Optional) *
---
```

**\* Not currently shown on the website even if it is added to the member's file.**

**\*\* Due to certain restrictions with the technology, roles must be defined as an integer key which maps a member to their respective role.** <details>
  <summary>Click to see the list of possible roles</summary>
  <ul>
    <li>(0) -> Advisor</li>
    <li>(1) -> President</li>
    <li>(2) -> Vice-President</li>
    <li>(3) -> ICC Representative</li>
    <li>(4) -> Secretary</li>
    <li>(5) -> Treasurer</li>
    <li>(6) -> Project Manager</li>
    <li>(7) -> Event Coordinator</li>
    <li>(8) -> Social Media Manager</li>
    <li>All other members are sorted using lexicographic order by first name.</li>
  </ul>
</details>

## Adding a project to the project list:

![projects](https://i.imgur.com/rxZzqnQ.png)

- It is also very simple to add a project to the project list. Similarly to adding a new member, all one must do is:
 - Fork this repository
 - Create a new markdown _(`*.md`)_ file in the `/projects` directory that follows the naming convention `projectName.md`
 - Edit the created markdown file so it contains the information shown below
 - Create a pull request to merge your changes back onto the live site
 
 After it is accepted, your information will appear within minutes.

```yml
---
name: Your project's name
short_bio: A short bio about the project
image_url: An image url for your project logo
website: Your project's website url (Optional)
github: Your project's GitHub organization name (Optional)
---
```

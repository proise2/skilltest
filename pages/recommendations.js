import Htmlheader from '../components/Htmlheader'
import Link from 'next/link'
import styles from '../styles/Question.module.css'

const recommendations = () => {
  return (
    <div className={styles.container}>
      <Htmlheader title='Custom Domain' />
      <h2>A customer writes in to the Helpdesk stating: &ldquo;I have a custom domain which I purchased at GoDaddy and I want to use it on my project&ldquo;. In a couple of paragraphs, how do you respond?</h2>
      <p>Hello Customer Name,</p>
      <p>Thank you for reaching out to Vercel Support!</p>
      <p>Setting up a custom domain can be painless and easy. Let&apos;s walk through the steps below.</p>
      <p>First I want to direct you to our documentation on setting up <a className={styles.inbedded_link} href='https://vercel.com/docs/concepts/projects/custom-domains' target='_blank' rel="noreferrer">custom domains</a>.</p>
      <p>To replace the default &apos;.vercel.app&apos; domain on your deployment, you will first need to select your project. From the dashboard, select the project you would like to add your domain to.</p>
      <p>Next, navigate to the domain settings by selecting the settings tab. From settings, select the Domains menu item, which will navigate you to the domains page.</p>
      <p>Next, enter the domain you want to add to your project. Note, that if the domain is being used by another vercel account, you may be prompted to verify access to the domain. After the domain has been added, you will be prompted to configure it based on the type of domain it is. Apex domains (example.com) can be configured with an A record, while subdomains (docs.example.com) can be configured with a CNAME record. Both types can be configured using the Nameservers method. When setting the A record on an apex domain there are help links to help you setting the A record on your DNS provider (GoDaddy). Additionally, there is also a help link to assist in setting the CNAME record for a subdomain with your DNS provider (GoDaddy). If you choose to use the Nameserver option for either of the domain types, you will be provided the Vercel nameservers to copy and use with your DNS.</p>
      <p>Once the domain has been properly configured, the card status of the domain will reflect the change.</p>
      <p>Please let me know if you run into any issues setting up the domain or if you have any questions about this process.</p>
      <div className={styles.link}><Link href='/fun'>Lets have some fun</Link></div>
    </div>
  )
}

export default recommendations

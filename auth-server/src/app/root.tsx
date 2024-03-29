import {
    Links,
    LinksFunction,
    LiveReload,
    Meta,
    MetaFunction,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'remix';
import theme from '~/index.css';

export const links: LinksFunction = () => {
    return [{ rel: 'stylesheet', href: theme }];
};

export const meta: MetaFunction = () => {
    return { title: 'Remix Auth Server' };
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />

                <Links />
            </head>
            <body>
                <Outlet />

                <ScrollRestoration />

                <Scripts />

                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}

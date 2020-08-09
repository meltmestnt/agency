import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import gsap from 'gsap';

const caseStudies = [
    {
        id: 1,
        subtitle: 'Curology',
        title: 'A custom formula for your skin"s unique needs',
        img: 'curology-min.png',
    },
    {
        id: 2,
        subtitle: 'Yourspace',
        title: 'Open space floor plans for your next venture',
        img: 'yourspace-min.png',
    },
    {
        id: 3,
        subtitle: 'Lumin',
        title: 'For your best look ever',
        img: 'lumin-min.png',
    },
    {
        id: 4,
        subtitle: 'Shoey',
        title: 'Increase your productivity',
        img: 'pexels-photo-4939602.jpeg',
    },
    {
        id: 5,
        subtitle: 'Kacey',
        title: 'Get the best you deserve',
        img: 'yourspace-min.png',
    },
    {
        id: 6,
        subtitle: 'Trey',
        title: 'Work hard',
        img: 'pexels-jake-ryan-3860379.jpg',
    },
    {
        id: 7,
        subtitle: 'Lumin',
        title: 'For your best look ever',
        img: 'lumin-min.png',
    },
];

function Cases() {
    const row = React.useRef(null);
    
    const [index, setIndex] = React.useState(0);
    const slide = React.useCallback(() => {
        if (!row.current) return;
        if (index > Math.round(caseStudies.length / 2)) {
            setIndex(0);
            return;
        }
        if (index < 0) {
            setIndex(Math.round(caseStudies.length / 2));
            return;
        }
        row.current.scroll({
            left: index >= caseStudies.length ? +row.current.offsetWidth : (row.current.offsetWidth / 3) * index,
            behavior: 'smooth'
        })
    }, [index]);

    React.useLayoutEffect(() => {
        row.current.scroll({
            left: 100,
            behavior: 'smooth'
        });
    })

    React.useLayoutEffect(() => {
        slide();
    }, [index, slide]);

    const keyNav = React.useCallback(ev => (ev.which || ev.keyCode) === 37 ? setIndex(index - 1) : (ev.which || ev.keyCode) === 39 ? setIndex(index + 1) : null, [index])

    React.useEffect(() => {
        window.addEventListener('keydown', keyNav);
        return () => window.removeEventListener('keydown', keyNav)
    })
    return (
        <section className='cases'>
            <>
                <div className='cases-navigation'>
                    <div
                        className='cases-arrow prev'
                        onClick={(ev) => setIndex(index - 1)}
                    >
                        <CasesPrev />
                    </div>
                    <div
                        className='cases-arrow next'
                        onClick={(ev) => setIndex(index + 1)}
                    >
                        <CasesNext />
                    </div>
                </div>
                <div className='row' ref={row}>
                    {caseStudies.map((c, i, arr) => (
                        <div key={c.id} className='case'>
                            <div className='case-details'>
                                <span>{c.subtitle}</span>
                                <h2>{c.title}</h2>
                            </div>
                            <div className='case-image'>
                                <img
                                    src={require(`../assets/${c.img}`)}
                                    alt={c.title}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </section>
    );
}

export default Cases;

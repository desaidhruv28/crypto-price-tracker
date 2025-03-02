import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Real-Time Tracking",
		description: (
			<>
				Get live cryptocurrency price updates with automatic refresh and
				visual indicators for price changes.
			</>
		),
	},
	{
		title: "Smart Search",
		description: (
			<>
				Find any cryptocurrency instantly with our real-time search and
				filtering functionality.
			</>
		),
	},
	{
		title: "Modern Tech Stack",
		description: (
			<>
				Built with Vite, React, TypeScript, and TanStack Query for
				optimal performance and developer experience.
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

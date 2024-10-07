## Nextjs Observability

The purpose of this project is to playaround with Nextjs and its observability set up.

The dev set up is mainly borrowed from [opentelemetry-collector-dev-setup](https://github.com/vercel/opentelemetry-collector-dev-setup/tree/main).

To run the dev stack

```
docker compose up -d
```

That will expose the following backends:

- **Jaeger** at [http://0.0.0.0:16686](http://0.0.0.0:16686): Jaeger is an open-source, end-to-end distributed tracing system. It is used for monitoring and troubleshooting the performance of
  microservices-based architectures by visualizing distributed transactions and helping to identify bottlenecks in services
- **Zipkin** at [http://0.0.0.0:9411](http://0.0.0.0:9411): Zipkin is another distributed tracing system similar to Jaeger. It helps in gathering timing data needed to troubleshoot latency problems in
  microservices.
- **Prometheus** at [http://0.0.0.0:9090](http://0.0.0.0:9090): Prometheus is a powerful open-source monitoring and alerting toolkit widely used for monitoring cloud-native applications. It collects and stores metrics as time-series data, which can then be queried and visualized. Notes: It may take some time for the application metrics to appear on the Prometheus dashboard;
- **OpenTelemetry Collector**: The OpenTelemetry Collector is a vendor-agnostic open-source service for receiving, processing, and exporting telemetry data (traces, metrics, logs). It can collect data from multiple sources and send it to various destinations.

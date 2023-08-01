# Use a base image with JDK and Maven installed
FROM maven:3.8.4-openjdk-17-slim AS builder

# Set the working directory
WORKDIR /app

# Copy the Maven project file
COPY pom.xml .

# Download the project dependencies
RUN mvn dependency:go-offline -B

# Copy the application source code
COPY src ./src

# Build the application
RUN mvn package -DskipTests

# Use a lightweight base image with JRE
FROM adoptopenjdk:17-jre

# Set the working directory
WORKDIR /app

# Copy the JAR file from the builder stage
COPY --from=builder /app/target/app.jar .

# Expose the desired port
EXPOSE 8080

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Set environment variables for PostgreSQL connection
ENV DB_HOST=localhost \
    DB_PORT=5432 \
    DB_NAME=quest \
    DB_USER=admin \
    DB_PASSWORD=admin

# Run the application
CMD ["java", "-jar", "app.jar"]

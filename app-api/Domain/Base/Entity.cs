﻿namespace app_api.Domain.Base
{
    public abstract class Entity
    {
        private readonly Queue<IDomainEvent> pendingEvents = new();

        public Queue<IDomainEvent> DomainEvents => this.pendingEvents;

        public virtual long Id { get; protected set; }

        public static bool operator ==(Entity? a, Entity? b)
        {
            if (a is null && b is null)
            {
                return true;
            }

            if (a is null || b is null)
            {
                return false;
            }

            return a.Equals(b);
        }

        public static bool operator !=(Entity a, Entity b)
        {
            return !(a == b);
        }

        public override bool Equals(object? obj)
        {
            if (obj is not Entity other)
            {
                return false;
            }

            if (ReferenceEquals(this, other))
            {
                return true;
            }

            if (this.Id == 0 || other.Id == 0)
            {
                return false;
            }

            return this.Id == other.Id;
        }

        public override int GetHashCode() => this.Id.GetHashCode();

        protected void AddDomainEvent(IDomainEvent domainEvent)
        {
            this.pendingEvents.Enqueue(domainEvent);
        }
    }
}
